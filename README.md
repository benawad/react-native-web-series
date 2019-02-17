# Monorepo Config Settings (**DRAFT**)
## Project Structure (Monorepo Root)
    Directories
        ../packages --> monorepo root.  Child projects located in ./packages subfolder.
        ./packages/common -> Library of code common to both react-web and react-native build targets
        ./packages/app  -> react native build project
        ./packages/web -> react web build project folder

    Files
        ../packages/package.json  -> where yarn workspaces are configured.
            “private”:”true”  -> needed, don't know why
            “name”:”my-monorepo"  CONFIRM: shouldn't this be called @wow?
            “main”: “index.js" -> CONFIRM: don't think this is needed
            “workspaces”: [“packages/*”]  —> register child projects with yarn's workspace manager

        ../packages/tsconfig.json  -> CONFIRM: this file not neeeded, no building happening here.

### Project Structure (Common)
    Directories:
        ./packages/common -> Library of code common to both react-web and react-native build targets
        ./packages/common/dist  -> output location from typescript compiler (see "tsconfig.outdir").
        ./packages/common/src  -> input source for typescript compiler (see "tsconfig.include").

    ./packages/common/package.json
        “name”:”@wow/common”  —> @wow is monorepo name, “common” is dependency name
        “main”:”dist/index.js” —> note dist must be specified, else import “@wow/common” won’t be found
        “build” : “rimraf dist && tsc”  —> to delete dist/ then recompile typescript
        “devDependency”:”rimraf”:”1.0.0"

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
