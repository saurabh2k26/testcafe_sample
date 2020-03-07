pipeline {
agent any
stages {
    stage('Initialize'){
        steps {
            script { def dockerHome = tool "myDocker" 
                    sh "echo \"env.PATH = ${env.PATH}\""
                    sh "echo \"env.PATH = \"${dockerHome}/bin:${env.PATH}\"\""
                   }}
        }
}}
