# Statistics project

[![Build Status](https://travis-ci.com/skosinskiy/statistics.svg?branch=master)](https://travis-ci.com/skosinskiy/statistics)
[![codecov](https://codecov.io/gh/skosinskiy/statistics/branch/master/graph/badge.svg)](https://codecov.io/gh/skosinskiy/statistics)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=statistics&metric=alert_status)](https://sonarcloud.io/dashboard?id=statistics)

### Frontend server
##### Actions to start DEV server from root directory:
1. Run command 'cd frontend'
2. Run command 'npm install'
3. Run command 'npm start'
##### Actions for PRODUCTION build from root directory:
1. Run command 'npm run-script build --prefix frontend/'

###### Important! 

Both dev and production builds are going through ESLint and Stylelint checks!

### Backend server
###### At least Java 11 requeired to run backend server (guide to install Java https://stackoverflow.com/questions/52511778/how-to-install-openjdk-11-on-windows)
##### Actions to start DEV server from root directory:
1. Run command 'gradlew clean bootRun'
##### Actions for PRODUCTION build from root directory:
1. Run command 'gradlew clean buildApplicationLocal'

### Entire application
##### Actions for PRODUCTION build from root directory:
1. Run command 'gradlew clean buildApplicationLocal'

### Test credentials
Login: user@gmail.com

Password: admin

### API Documentation
Swagger documentation is available by path /swagger-ui.html

By default, documentation may be retrieved by url http://localhost:10000/swagger-ui.html