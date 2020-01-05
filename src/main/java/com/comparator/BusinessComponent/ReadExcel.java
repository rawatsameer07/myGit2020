package com.comparator.BusinessComponent;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ReadExcel {
	public static XSSFWorkbook workbook =null;
	public static XSSFSheet sheet=null;
	private static String filePath = System.getProperty("user.dir")+"/src/test/resources/";
	
public static void main(String args[]) throws Exception {
	readContentByFromFile("/Users/sameerrawat/eclipse-workspace/comparatorLibrary/src/test/resources/dataTables/APIFile_A.xlsx");
	
}

//This method will validate the text against the url pattern.
public static boolean isUrl(String urlTest) {
	Pattern p = Pattern.compile("^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]");
	Matcher m = p.matcher(urlTest);
	boolean b = m.matches();
	return b;
}

//Verifying the returned column has url or not. If its url than return the column index
private static int findColumn(XSSFSheet sheet, String cellContent) {
    for (Row row : sheet) {
        for (Cell cell : row) {
            if (cell.getCellType() == Cell.CELL_TYPE_STRING) {
                if (cell.getRichStringCellValue().getString().trim().contains(cellContent)) {
                	if(isUrl(cell.getStringCellValue()))
                    return cell.getColumnIndex();  
                }
            }
        }
    }               
    return -1;
}
public static HashMap<Integer,String> readContentByFromFile(String file) throws GoException{
//	 Path path = Paths.get(firstFilePath);
//	 Path fileName = path.getFileName();
    ArrayList<String> columndata = null;
    ArrayList<String> headers = null;
    HashMap<Integer, String> map =new HashMap<Integer,String>();
    int columnSize =0;
    int columnNumber =0;
    try { 
    FileInputStream ios = new FileInputStream(new File(filePath+file));
         workbook = new XSSFWorkbook(ios);
        int sheetCount = workbook.getNumberOfSheets();
        List<String> sheetNames = new ArrayList<String>();
        for (int i=0; i<sheetCount; i++) {
            sheetNames.add( workbook.getSheetName(i) );
            columnNumber = findColumn(workbook.getSheetAt(i),"http");
            if(columnNumber>-1)
            {
            	sheet=workbook.getSheet(sheetNames.get(i));
            	break;
            }
        }         
        System.out.println(sheet.getSheetName()   + "   "+columnNumber);
        Iterator<Row> rowIterator = sheet.iterator();
        columndata = new ArrayList<String>();
        headers = new ArrayList<String>();
        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();
            columnSize = sheet.getRow(0).getLastCellNum()-1;
            Iterator<Cell> cellIterator = row.cellIterator();
            while (cellIterator.hasNext()) {
                Cell cell = cellIterator.next();
                if (row.getRowNum() ==0 && cell.getColumnIndex() == 0){
                               for(int i=0;i<=columnSize;i++) {
                                               try{headers.add(cell.getRow().getCell(i).toString());}catch(Exception e){
                                                               headers.add("");
                                               }
                     }
                }
             
                if(row.getRowNum() > 0 && cell.getColumnIndex() == columnNumber){
                               switch (cell.getCellType()) {
                               case Cell.CELL_TYPE_NUMERIC:
                                   columndata.add(cell.getNumericCellValue()+"");
                                   break;
                               case Cell.CELL_TYPE_STRING:
                                   columndata.add(cell.getStringCellValue());
                                   break;
                               default :
                               columndata.add("");
                                   break;
                               }   
                               
                    }
                }
            }
      
        ios.close();
        for(int i = 0;i<columndata.size();i++){
               map.put(i+1, columndata.get(i).toString());
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    return map;
}
}
    

