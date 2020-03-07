pipeline {
agent any
stages {
    stage('Initialize'){
        steps {
            script { def dockerHome = tool "myDocker" 
            sh "env.Path = \"${dockerHome}/bin:${env.Path}\""
                   }}
        }
    stage('Push to Docker Registry'){
        steps {
            sh "withCredentials([usernamePassword(credentialsId: 'dockerHubAccount', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) { pushToImage(CONTAINER_NAME, CONTAINER_TAG, USERNAME, PASSWORD)} "           
        }  
    }
}}
