iphone-sms-webapp
=================

View and navigate SMS data from iPhone backups.

This webapp requires the SMS database from an iPhone. As it happens,
this file is available on your computer after you do an unencrypted
iPhone backup somewhere in this directory off of your home directory:

    ~/Library/Application Support/MobileSync/Backup/

Look for a filename beginning with:

    3d0d7e5fb2ce288813306e4d4636395e047a3d28

It may end with .mddata or .mdbackup, but that doesn't much matter.
That file is an sqlite3 database with all the SMS messages in it. 
Copy that file to the data/ directory in this project.

Install everything you need:

    npm install

and then start the web application.

    node app

If all is well, navigate to:

    http://localhost:3000

and you should see the SMS database from the phone.

If this application has been helpful to you, shoot some bitcoin to
this address:

    1Kw5e8as23sQaXdtUEwrZPqE4rfy45WyEA

Thanks!
