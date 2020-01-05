package com.comparator.BusinessComponent;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.Properties;

import org.apache.commons.io.IOUtils;

public class HelperUtils {
	private static Properties prop = new Properties();
	
	public static String readProperty(String uri) {
		try {
			String[] array = uri.split("->", 2);
			String fileName = array[0];
			String propertyName = array[1];
			InputStream input = new FileInputStream("src/test/resources/" + fileName);
			prop.load(input);
			return prop.getProperty(propertyName);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}		
	}
	
	public static String analyzeValue(String arg1) throws Exception{
		String value=arg1.split("-->")[0];
		value = value.replaceAll("&nbsp;"," ");
        if (value.contains("**")) {value = new StringBuffer(Math.round(new Date().getTime()/10000)).toString();
        if(value.contains(".json"))  {try {
			value= IOUtils.toString(new FileReader("src/test/resources/" + value));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}}
        //--Write and Read from Prop
        if (arg1.contains("-->")) {
        	String fileName = (arg1.split("-->")[1].split("/")[0]); 
        	String key=arg1.split("/")[1];
        	System.out.println(fileName + ":" + key + "=" + value); 
        	HelperUtils.saveData(fileName, key, value); 
        }
        if (arg1.contains("<--")) {
        	String strPrefix = arg1.split("<--")[0];
        	String fileName = (arg1.split("<--")[1].split("/")[0]);
        	String key=(arg1.split("<--")[1].split("/")[1]);
        	value = HelperUtils.readProperty(strPrefix+fileName + "->" + key);
        }
        }
        return value;
        
      }
        
        public static void saveData(String fileName,String key,String attributeValue) throws Exception {
        	try {
        		FileOutputStream fileOut = null;
    	        FileInputStream fileIn = null;
    	        prop.clear();
                File file = new File("src/test/resources/"+fileName);
                if(!file.exists()) file.createNewFile();
                fileIn = new FileInputStream(file);
                prop.load(fileIn);
                prop.setProperty(key, attributeValue);
                fileOut = new FileOutputStream(file);
                prop.store(fileOut, "API properties");
                fileOut.close();
        	}	
        	catch(Exception e) {
        		throw new GoException("Failed to save Data--> "+fileName,e);
        	}
        }
}
