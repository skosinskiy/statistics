# Statistics project

[![Build Status](https://travis-ci.com/skosinskiy/statistics.svg?branch=master)](https://travis-ci.com/skosinskiy/statistics)
[![codecov](https://codecov.io/gh/skosinskiy/statistics/branch/master/graph/badge.svg)](https://codecov.io/gh/skosinskiy/statistics)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=statistics&metric=alert_status)](https://sonarcloud.io/dashboard?id=statistics)

### Frontend server
#####Actions to start server from root directory:
1. Run command 'npm install --prefix frontend/'
2. Run command 'npm start --prefix frontend/'
#####Actions to build production build from root directory:
1. Run command 'npm run-script build --prefix frontend/'

######Important! 

Both dev and production builds are going through ESLint and Stylelint checks!

### Frontend server
#####Actions to start server from root directory:
1. Run command 'gradlew clean bootRun'
#####Actions to build production build from root directory:
1. Run command 'gradlew clean build'

### Entire application
#####Actions to build production build from root directory:
1. Run command 'gradlew clean buildApplicationLocal'