# HookAPI for nodejs 

## Introduction

Hookapi allows one to hook *ANY* api in *ANY* module globally.

During development, there are occasions that you may want to debug a third party module that does not function correctly. 

One approach is to dig into the source code, but reading and understanding those code could take a long time, and it is also hard to see dynamic changes during the run.

Another approach is to run that module and try to see how it works. For example, one may try to watch, trace, or monitor every http calls when the program runs. 
However, this is extremely difficult as http module, (or fs module) etc are down at system level and it is hard to monitor at run time.

This module tries to fill the gap to allow developers the ability to hook into the any module (system or user module) to perform some custom functions.

## Install

	$ npm install hookapi
	or get it from the github
		
## Usage & Examples

	hookapi.cmd HOOKING_FILE.js [app.js]
		
	To hook *ANY* http calls, 
	invoke the following commands from console:
	
		hookapi.cmd httptrace.js testhttp.js
		testhttp.js can be your app.js
		
	and then the result is:
	
*** HOOKED http.request =>http://www.google.com/index.html
Got response: 302

## How it works
		
	hookapi works by hooking exported functions of any module. So it requires that that module MUST be loaded BEFORE first use (or require).

## TODO
	* make use of require.resolve 
	to support same name with different module

	* solving hooking sequence issues
	for example, https uses http's which may also be hooked by something else

	* more useful utilities and or examples


