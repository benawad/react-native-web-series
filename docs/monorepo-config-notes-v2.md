# Notes on Monorepo Config Settings, also - node_module hoisting behaviour (v2)

## Monorepo Project Structure

    Key Directories
        ./ --> monorepo root.  Child projects are located in ./packages/** subfolders.
        ./packages/common -> Library of common code used in both react-web and react-native build sources
        ./packages/app  -> "react native"  project source
        ./packages/web -> "react web" project source

    Files & Settings
        ../packages/package.json  -> where yarn workspaces are configured.
            “private”:”true”  -> don't publish to npm.  (needed by yarn monorepo)
            “name”:”my-monorepo"  CONFIRM: shouldn't this be called @wow?
            “main”: “index.js" -> CONFIRM: don't think this is needed at monorepo root
            “workspaces”: [“packages/*”]  —> register child projects with yarn's workspace manager

        ../packages/tsconfig.json  -> CONFIRM: file not neeeded here, since no compilation taking place at root level.

### Monorepo Common

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

### Monorepo "app"

    ./packages/app/package.json
        “name”:”@wow/app"
        “dependencies”: {“@wow/common”:”1.0.0”}

    ./packages/app/tsconfig.json  -> CONFIRM: do we need this?
