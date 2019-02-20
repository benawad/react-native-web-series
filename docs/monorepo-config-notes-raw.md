# Monorepo Config Settings (**DRAFT**)

## Project Structure (Monorepo Root)

    Directories
        ./ --> monorepo root.  Child projects located in ./packages subfolder.
        ./packages/common -> Library of code common to both react-web and react-native build targets
        ./packages/app  -> react native build project
        ./packages/web -> react web build project folder

    Files
        ../packages/package.json  -> where yarn workspaces are configured.
            “private”:”true”  -> don't publish to npm.  (needed by yarn monorepo)
            “name”:”my-monorepo"  CONFIRM: shouldn't this be called @wow?
            “main”: “index.js" -> CONFIRM: don't think this is needed at monorepo root
            “workspaces”: [“packages/*”]  —> register child projects with yarn's workspace manager

        ../packages/tsconfig.json  -> CONFIRM: file not neeeded here, since no compilation taking place at root level.

### Project Structure (Common)

    Directories:
        ./packages/common/dist  -> output location from typescript compiler (see "tsconfig.outdir").
        ./packages/common/src  -> input source for typescript compiler (see "tsconfig.include").

    ./packages/common/package.json
        “name”:”@wow/common”  —> @wow is monorepo name, “common” is dependency name
        “main”:”dist/index.js” —> When "@wow/common" is referenced in other projects, it's "dist/index.js" that is run as main.
        “build” : “rimraf dist && tsc”  —> to delete dist/ then recompile typescript from scratch
        “devDependency”:{ ”rimraf”:”1.0.0" }

    ./packages/common/tsconfig.json
        "include":["src"]  -> specifies input source for typescript compiler
        "outdir":"dist" -> specifies output folder location for typescript compiler
        "modules":"commonjs"
        "declaration":"true"  -> to generate .d.ts file in typescript output
        “jsx”:”react"
        no “isolated modules” --> we want the d.ts declarations generated
        no “allowjs”, --> this is typescript project
        no  “noemit” --> (we don’t not want the code emitted… IOW, we want it emitted)

### Project Structure (App)

    ./packages/app/package.json
        “name”:”@wow/app"
        “dependencies”: {“@wow/common”:”1.0.0”}

    ./packages/app/tsconfig.json  -> CONFIRM: do we need this?

### Project Structure (Web)

    ./packages/web/package.json
        “name”:”@wow/web"
        “dependency”:{“@wow/common”:”1.0.0”}
        “scripts”:{“start”:”SKIP_PREFLIGHT_CHECK=true react-scripts start"}

    ./packages/web/tsconfig.json -> CONFIRM: do we need this?

### Folders & Hoisting Behaviour for `node_modules` folders

    ./node_modules
        - contains a single copy of all "hoistable" modules for the entire monorepo.
        - includes a symlink to each child project under ./node_modules/@wow
                ./node_modules/@wow/common -> ./packages/common
                ./node_modules/@wow/app -> ./packages/app
                .node_modules/@wow/web -> ./packages/web

    ./common/node_modules
        - all dependencies hoisted up into monorepo root.
        - source code in dist folder accessible from other packages via smylink or wml shadow copies

    ./app/node_modules
        - all "hoistable" dependencies hoisted up into monorepo root.
        - non-hoistable dependencies (e.g. react, react-native) remain in ./packages/app/node_modules
        - react-native & react can't follow symlinks so use wml to shadow copy @wow/common upon change.
            - wml add ../common ../node_modules/@wow/common
              - this copies all of package/common into package/app/node_modules/@wow/common
              - (except for "common/node_modules" which is ignored by default via ./packages/common/.watchmanconfig)
              - use command "wml list" to show active links
              - use command "wml start" to start watching/copying
