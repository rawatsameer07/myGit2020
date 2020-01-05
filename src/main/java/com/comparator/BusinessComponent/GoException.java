package com.comparator.BusinessComponent;

public class GoException extends Exception{

//To print custom exception
public GoException(String message, Exception e)
{
	super(message,e);
}
}
