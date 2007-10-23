/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005 Engineering Ingegneria Informatica S.p.A.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

**/
package it.eng.test;

import it.eng.qbe.log.Logger;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import java.util.zip.ZipInputStream;

/**
 * JarResources: JarResources maps all resources included in a
 * Zip or Jar file. Additionaly, it provides a method to extract one
 * as a blob.
 */
public final class JarResources
    {

    // external debug flag
    public boolean debugOn=false;

    // jar resource mapping tables
    private Hashtable htSizes=new Hashtable();  
    private Hashtable htJarContents=new Hashtable();

    // a jar file
    private String jarFileName;

    /**
      * creates a JarResources. It extracts all resources from a Jar
      * into an internal hashtable, keyed by resource names.
      * @param jarFileName a jar or zip file
      */
    public JarResources(String jarFileName)
	{
	this.jarFileName=jarFileName;
	init();
	}

    /**
      * Extracts a jar resource as a blob.
      * @param name a resource name.
      */
    public byte[] getResource(String name)
	{
	return (byte[])htJarContents.get(name);
	}

    /** initializes internal hash tables with Jar file resources.  */
    private void init()
	{
	try
	    {
	    // extracts just sizes only. 
	    ZipFile zf=new ZipFile(jarFileName);
	    Enumeration e=zf.entries();
	    while (e.hasMoreElements())
		{
		ZipEntry ze=(ZipEntry)e.nextElement();

		if (debugOn)
		    {
		    Logger.debug(JarResources.class,dumpZipEntry(ze));
		    }

		htSizes.put(ze.getName(),new Integer((int)ze.getSize()));
		}
	    zf.close();

	    // extract resources and put them into the hashtable.
	    FileInputStream fis=new FileInputStream(jarFileName);
	    BufferedInputStream bis=new BufferedInputStream(fis);
	    ZipInputStream zis=new ZipInputStream(bis);
	    ZipEntry ze=null;
	    while ((ze=zis.getNextEntry())!=null)
		{
		if (ze.isDirectory())
		    {
		    continue;
		    }

		if (debugOn)
		    {
		    Logger.debug(JarResources.class,"ze.getName()="+ze.getName()+
				       ","+"getSize()="+ze.getSize() );
		    }

		int size=(int)ze.getSize();
		// -1 means unknown size.
		if (size==-1)
		    {
		    size=((Integer)htSizes.get(ze.getName())).intValue();
		    }

		byte[] b=new byte[(int)size];
		int rb=0;
		int chunk=0;
		while (((int)size - rb) > 0)
		    {
		    chunk=zis.read(b,rb,(int)size - rb);
		    if (chunk==-1)
			{
			break;
			}
		    rb+=chunk;
		    }

		// add to internal resource hashtable
		htJarContents.put(ze.getName(),b);

		if (debugOn)
		    {
		    Logger.debug(JarResources.class, ze.getName()+"  rb="+rb+
					",size="+size+
					",csize="+ze.getCompressedSize() );
		    }
		}
	    }
	catch (NullPointerException e)
		{
		Logger.debug(JarResources.class,"done.");
		}
	catch (FileNotFoundException e)
	    {
	    e.printStackTrace();
	    }
	catch (IOException e)
	    {
	    e.printStackTrace();
	    }
	}

    /**
      * Dumps a zip entry into a string.
      * @param ze a ZipEntry
      */
    private String dumpZipEntry(ZipEntry ze)
	{
	StringBuffer sb=new StringBuffer();
	if (ze.isDirectory())
	    {
	    sb.append("d ");
	    }
	else
	    {
	    sb.append("f ");
	    }

	if (ze.getMethod()==ZipEntry.STORED)
	    {
	    sb.append("stored   ");
	    }
	else
	    {
	    sb.append("defalted ");
	    }

	sb.append(ze.getName());
	sb.append("\t");
	sb.append(""+ze.getSize());
	if (ze.getMethod()==ZipEntry.DEFLATED)
	    {
	    sb.append("/"+ze.getCompressedSize());
	    }

	return (sb.toString());
	}

    /**
      * Is a test driver. Given a jar file and a resource name, it trys to
      * extract the resource and then tells us whether it could or not.
      *
      * <strong>Example</strong>
      * Let's say you have a JAR file which jarred up a bunch of gif image
      * files. Now, by using JarResources, you could extract, create, and
      * display those images on-the-fly.
      * <pre>
      *     ...
      *     JarResources JR=new JarResources("GifBundle.jar");
      *     Image image=Toolkit.createImage(JR.getResource("logo.gif");
      *     Image logo=Toolkit.getDefaultToolkit().createImage(
      *                   JR.getResources("logo.gif")
      *                   );
      *     ...
      * </pre>
      */
    public static void main(String[] args) throws IOException
	{
	if (args.length!=2)
	    {
	    System.err.println(
		"usage: java JarResources <jar file name> <resource name>"
		);
	    System.exit(1);
	    }

	JarResources jr=new JarResources(args[0]);
	byte[] buff=jr.getResource(args[1]);
	if (buff==null)
	    {
	    Logger.debug(JarResources.class,"Could not find "+args[1]+".");
	    }
	else
	    {
	    Logger.debug(JarResources.class,"Found "+args[1]+
			       " (length="+buff.length+").");
	    }
	}

    }	// End of JarResources class.
