# Read Me First
The following was discovered as part of building this project:

* The original package name 'com.project.web-clone' is invalid and this project uses 'com.project.web_clone' instead.

---

# 🚀 Recent Fixes (31/01/2026)

## ✅ Partner Page Issues - FIXED

### Issue 1: White Page `/student-experience/partner.html`
**Fixed:** Changed all links from `partner.html` → `/student-experience/partner`

### Issue 2: Partner Logos Layout Broken  
**Fixed:** Changed grid from 2 columns → 4 columns (responsive: 2/3/4)

**Test now:** http://localhost:8080/student-experience/partner

---

# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/3.5.10/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/3.5.10/maven-plugin/build-image.html)
* [Spring Web](https://docs.spring.io/spring-boot/3.5.10/reference/web/servlet.html)
* [Thymeleaf](https://docs.spring.io/spring-boot/3.5.10/reference/web/servlet.html#web.servlet.spring-mvc.template-engines)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/3.5.10/reference/using/devtools.html)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Handling Form Submission](https://spring.io/guides/gs/handling-form-submission/)

### Maven Parent overrides

Due to Maven's design, elements are inherited from the parent POM to the project POM.
While most of the inheritance is fine, it also inherits unwanted elements like `<license>` and `<developers>` from the parent.
To prevent this, the project POM contains empty overrides for these elements.
If you manually switch to a different parent and actually want the inheritance, you need to remove those overrides.

