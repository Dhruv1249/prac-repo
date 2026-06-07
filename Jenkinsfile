pipeline{
    agent{
        docker {
            image "docker:latest"
            args "-v /var/run/docker.sock:/var/run/docker.sock"
        }
    }
    stages{
        parallel {
            stage("Build python"){
                steps {
                    sh "docker build -t test-python python-app/."
                }
            }
            stage("Build node"){
                steps {
                    sh "docker build -t test-node node-app/."
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}
