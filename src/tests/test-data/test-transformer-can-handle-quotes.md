### What is Fortify?
<!-- What is SSC -->
<!-- what is fortify sca -->
The Fortify Software Security Center family of products performs sophisticated analyses of an enterprise’s source code that results in concise summaries of source code security vulnerabilities.
It mainly has two parts to it:
- Fortify SSC
- Fortify SCA
Ask me more to get specific details!

---

### What is Fortify SSC?
<!-- What is SSC -->
Fortify Software Security Centre is the central system to which all the scan results/analyses are to be uploaded. It helps SAP developers to upload, analyze, fix, and track code scan findings.  
For additional details, visit the [Fortify - Official Documentation](https://github.wdf.sap.corp/pages/Security-Testing/doc/fortify-doc/)

---

### What is Fortify SCA?
<!-- What is SCA -->
Fortify Static Code Analyzer is a set of software security analyzers that search for violations of security-specific coding rules and guidelines in a variety of languages. It produces analysis information that helps to deliver more secure software, as well as make security code reviews more efficient, consistent, and complete. Its design enables you to quickly incorporate new third-party and customer-specific security rules.  
For additional details, visit the [Fortify - Official Documentation](https://github.wdf.sap.corp/pages/Security-Testing/doc/fortify-doc/)

---

### Where can I find official documentation about Fortify tool?
Please visit the [Fortify - Official Documentation](https://github.wdf.sap.corp/pages/Security-Testing/doc/fortify-doc/) to learn more about Fortify.

---

### How do I reach Fortify SSC?
<!-- How can I login to Fortify --->
<!-- What is the URL for Fortify --->
Thanks to the Security-Testing team, Fortify-SSC is available centrally (as a service) to the entire SAP development community at [fortify.tools.sap](https://fortify.tools.sap/ssc]). It is also enabled with Single Sign-On, which takes you right into the application, assuming you've already registered (try the self-service if not already done)

---

### How do I register a new user in Fortify?
<!-- How to add new user to Fortify? -->
<!-- How to get access to Fortify? -->
You are already in the right place ([Fortify Self-Service](https://selfservice.fortify.tools.sap/)) for that. Just click on "Register User", type in your D/I/C number and "Register". As simple as that!
You can even register DL's using "Register a DL" section on the Self-Service.

---

### How to get added to an existing project on Fortify?
<!-- how to get access to my project -->
<!-- Can you add me to the project  -->
<!-- requesting access to a project -->
Short Answer. **Not possible using the Self-Service!**.  
The self-service can only help you register/sign-up to Fortify SSC. However, to get access to your/your team's project, you will need to contact the content-owner (or someone who is already on the project).  
Additional details around "Why so?" are described [here](https://github.wdf.sap.corp/pages/Security-Testing/doc/fortify-doc/access/#access-to-existing-application-versions)

---

### How to grant access to someone to an existing Project?
<!-- Grant access to application version -->
<!-- Allow access to someone to my project -->
<!-- Grant permissions to view my project -->
<!-- What to do to give access to someone to my project -->
If you are the creator/owner of the project (or) if you have enough permissions to grant access to others, please follow [Giving Access guide](https://github.wdf.sap.corp/pages/Security-Testing/doc/fortify-doc/access/#giving-access) to grant others access.  
**NOTE**: You will have to ensure they are already registered on Fortify first (either by someone manually, or by using the [self-service](https://selfservice.fortify.tools.sap/))!

If the above quick guide does not satisfy you, and want a detailed how to - try the [detailed guide](https://jam4.sapjam.com/blogs/show/MgMPOUEiYyvwdkWVNVEkWh)

---

### How to get started with Piper for Fortify?
<!-- How can I integrate Fortify into my CI pipeline? -->
<!-- How to run fortify scans using Piper -->
<!-- How to set up piper for fortify -->
<!-- Piper step configuration -->
We recommend to use the [Piper framework](https://go.sap.corp/piper) to run the scan in your CI pipeline. The exact name of the piper step which can be used for scanning using Fortify is "fortifyExecuteScan".  
The documentation for this can be found here: [fortifyExecuteScan documentation](https://github.wdf.sap.corp/pages/ContinuousDelivery/piper-doc/steps/fortifyExecuteScan/).

---

### What's new with Fortify?
<!-- Whats up with Fortify? -->
<!-- What's cooking? -->
<!-- Upcoming new features -->
Glad you asked! Checkout the [News](https://github.wdf.sap.corp/pages/Security-Testing/doc/fortify-doc/news/) section of our official documentation to checkout what's coming up in near future!

---

### How to get started with Fortify?
<!-- Getting Started  -->
<!-- New User. What to do? -->
Welcome! If you're new to Fortify, you will need to know this:
1. Register yourself (Signup) to be able to login to [Fortify SSC](https://fortify.tools.sap/ssc) - using the [Self-Service](https://selfservice.fortify.tools.sap/)
2. Check the login is working (SSO should take you right inside, once you're registered)
3. Once you're in, find the right people in the team who can grant you access to your team's projects/application versions!  
[If you're not sure who or how, you can always ask me that ;) ]

---

### How to request technical user for my project to use with pipelines ?
<!-- Technical User in CICD Pipeline -->
<!-- Service account for Piper -->
<!-- How to get technical user for Fortify -->
<!-- Can I use a service user rather than a personal user -->
To obtain a service user, start at [SGS ALM](https://wiki.wdf.sap.corp/wiki/display/globsecu/IT+-+Service+Account+Provisioning) and follow their process. You need to provide a set of human users who will be responsible for the service user.  
After this technical user is provisioned, use our [self-service](https://selfservice.fortify.tools.sap) to register this into Fortify (just like you did for a personal user), and add it to your project version(s). Service users will not be able to use the Fortify SSC UI.

---

### How can I run a scan?
<!-- How to trigger a scan with Fortify -->
<!-- How to scan my codebase with Fortify -->
Well that is simple.. You can install Fortify SCA on your machine (Windows, Linux, or Mac) using the installers and the license available in the [Releases](https://github.wdf.sap.corp/Security-Testing/fortify/releases) section of the Fortify repository.

The best way to run scans, though, is to run the analysis in your CI pipeline (see the corresponding question on that).

---

### Access Issues with Fortify SSC
<!-- Unable to login to Fortify -->
<!-- SSO Failure Error Fortify -->
Please check the following aspects before you try and login to Fortify:
- You are a registered user in Fortify SSC (if not, feel free to register using the self-service)
- You have access to the projects/application versions which you are working on. (that is, if you're able to login, but don't see your projects after login)

---

### Pipeline failure with 401 errors
<!-- Token expired error -->
<!-- Access denied error -->
I understand it must be frustrating to see these! As the error states, it might be due to the following reasons:
- The token being used by you (or your pipeline) has expired. If so, please attempt generating a new token [ask me how ;) ]. This is typically the case if you're attempting this for the first time, or your token has suddenly started failing (without any change on your end)!
- You (or the technical user in play) may not have access to the project / application version(s) which you are trying to access.
- If you are experimenting something new (like some new API calls from Fortify SSC), please check if this token type (i.e. PiperToken) has permissions to perform the said operations. You can write down a [SNOW Ticket](http://itsm.services.sap/sp) for the same under `ISV-DL-CICD-SECURITY-FORTIFY`. If the same operations have worked before, then this is probably not the cause.

---

### Generate new token for technical user
<!-- New technical user get token -->
<!-- How to renew a token for technical user -->
Fortify SSC exposes multiple APIs to the users, which can be used to also generate a token for any technical user. 
To try this out, read through the [API Usage Overview](https://fortify.tools.sap/ssc/html/docs/docs.html#!/overview/) documentation, and then try the API's exposed here on [Fortify API Swagger Docs](https://fortify.tools.sap/ssc/html/docs/api-reference/index.jsp). Checkout the [Token Controller](https://fortify.tools.sap/ssc/html/docs/api-reference/index.jsp#/auth-token-controller) for token-specific APIs.

Note: When you try this on browser, you're running API calls using your I/C/D User. But once you know how, replicate that on command line / API testing tools (like Postman) using the credentials of a technical user - to generate a token for the same.

---

### Is my token valid?
<!-- Token validity -->
If you're hitting a lot of 401 status codes, it is a valid thing to worry about. 
You can try to retrieve all the tokens you've created (which are valid) using [Fortify SSC Token APIs](https://fortify.tools.sap/ssc/html/docs/api-reference/index.jsp#/auth-token-controller) (try the GET call) and check if you have any valid ones. This API call however, will NOT show you the token itself (for security reasons) - but show you all the valid tokens and their types which should help you narrow down your search.

Note: If you're trying this from browser, you'll get the tokens of your I/C/D user (with which you've logged in) and NOT from the technical users (if you have any). Try the same call using command-line / API testing tools (like Postman) to get the tokens for a technical user!

--- 
