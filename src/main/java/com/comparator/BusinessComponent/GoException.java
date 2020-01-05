package com.comparator.BusinessComponent;

public class GoException extends Exception{
public GoException(String message, Exception e)
{
	super(message,e);
}
}
