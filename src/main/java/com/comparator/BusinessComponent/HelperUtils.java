package com.comparator.BusinessComponent;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import java.io.InputStream;
import java.util.Date;
import java.util.Properties;

public class HelperUtils {
	private static Properties prop = new Properties();

// To read the value from property file
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

//This method will help to read/write/save the value.
	public static String analyzeValue(String arg1) throws Exception {
		String value = arg1.split("-->")[0];
		value = value.replaceAll("&nbsp;", " ");
		if (value.contains("**")) {
			value = new StringBuffer(Math.round(new Date().getTime() / 10000)).toString();
			// --Write and Read from Prop
			if (arg1.contains("-->")) {
				String fileName = (arg1.split("-->")[1].split("/")[0]);
				String key = arg1.split("/")[1];
				System.out.println(fileName + ":" + key + "=" + value);
				HelperUtils.saveData(fileName, key, value);
			}
			if (arg1.contains("<--")) {
				String strPrefix = arg1.split("<--")[0];
				String fileName = (arg1.split("<--")[1].split("/")[0]);
				String key = (arg1.split("<--")[1].split("/")[1]);
				value = HelperUtils.readProperty(strPrefix + fileName + "->" + key);
			}
		}
		return value;

	}

//Once api returns the response and if user invoke analyzeValue by providing fileName,key, attrivuteValue than below method will be called from analyze 
//	and helps to save data to the file. Formats hould be like : jsonPath-->fileName.txt/key ex. $..abc-->ab.txt/myKey
	public static void saveData(String fileName, String key, String attributeValue) throws Exception {
		try {
			FileOutputStream fileOut = null;
			FileInputStream fileIn = null;
			prop.clear();
			File file = new File("src/test/resources/" + fileName);
			if (!file.exists())
				file.createNewFile();
			fileIn = new FileInputStream(file);
			prop.load(fileIn);
			prop.setProperty(key, attributeValue);
			fileOut = new FileOutputStream(file);
			prop.store(fileOut, "API properties");
			fileOut.close();
		} catch (Exception e) {
			throw new GoException("Failed to save Data--> " + fileName, e);
		}
	}

//When two lists have the different size than below method will compare both list size and will return the length which is max among them.
	public static int getMaxLength() throws GoException {
		try {
			int maxLength = 0;
			for (int i = 0; i < ReadExcelMultiple.requestUrls.length; i++) {
				for (int j = i + 1; j < ReadExcelMultiple.requestUrls.length; j++) {
					if (ReadExcelMultiple.requestUrls[i].size() > ReadExcelMultiple.requestUrls[j].size())
						maxLength = ReadExcelMultiple.requestUrls[i].size();
					else
						maxLength = ReadExcelMultiple.requestUrls[j].size();
				}
			}
			return maxLength;
		} catch (Exception e) {
			throw new GoException("Get max length Exception occured--> ", e);
		}
	}
}
