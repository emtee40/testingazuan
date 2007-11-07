public String getSingleValueProfileAttribute(String attrName) {
		StringBuffer strBuf = new StringBuffer();
		strBuf.append(attrName);
		return strBuf.toString();
};

public String getMultiValueProfileAttribute(String attrName, String prefix, String newSplit, String suffix) {
	String splitter = attrName.substring(1,2);
	String valuesList = attrName.substring(3, attrName.length() - 2);
	String [] values = valuesList.split(splitter);
	String newListOfValues = values[0];
	for (i in 1..<values.length) {
		newListOfValues = newListOfValues + newSplit + values[i];
	};
	String finalResult = prefix + newListOfValues + suffix;
	StringBuffer strBuf = new StringBuffer();
	strBuf.append(finalResult);
	return strBuf.toString();
};


public String returnValue(String valuein) {
		StringBuffer strBuf = new StringBuffer();
		strBuf.append('<ROWS>');
		strBuf.append('<ROW ');
		strBuf.append('value=\''+valuein+'\' >');
		strBuf.append('</ROW>');
		strBuf.append('</ROWS>');
		return strBuf.toString();
};


public String getListFromMultiValueProfileAttribute(String attrName) {
	String splitter = attrName.substring(1,2);
	String valuesList = attrName.substring(3, attrName.length() - 2);
	String [] values = valuesList.split(splitter);
	StringBuffer strBuf = new StringBuffer();
	strBuf.append("<ROWS>");
	for (i in 0..<values.length) {
		strBuf.append("<ROW VALUE=\"" + values[i] +  "\" />");
	};
	strBuf.append("</ROWS>");
	return strBuf.toString();
};
