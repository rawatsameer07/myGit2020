# myGit2020
Starting with git
Description : This framework is developed using Java and cucumber .To validate the response from multiple files i have followed the below steps:
    1. I created maven project
    2. I creaetd ReadExcelMultiple.java file to read the request urls from the multiple files. isUrl() function will verify whether text is url or not and based on that findColumn() function will return the column number which will be helpful for readContentByFromFile() function to read the content.
    3. I have creaetd the feature file in comparatorLibrary/src/test/resources/features/ folder and to run this feature file APPTestRunner is created in comparatorLibrary/src/test/java/com/comparator/AppTestRunner/AppTestRunner.java folder.
    4. StepDefinitions are written inside src/test/java/com/comparator/StepDefs folder.
    5. Batch file 'autorun.bat' is created in project root folder.

To setup this project please follow the below instructions:
    1. Install maven in your system
    2. Install eclipse
    3. Create workspace
    4. Import project
    
To Run the code:
    There are two ways to run the code:
        1. Go to 'comparatorLibrary/src/test/java/com/comparator/AppTestRunner/' folder and run AppTestRunner.java file. It will trigger the feature file present in 'comparatorLibrary/src/test/resources/features/' folder
        2. To run test directly from the command line:
            a). Launch terminal
            b). Navigate to project root path
            c). check files present
            d). run autorun.bat file using below command.
                    sh autorun.bat
                    
        