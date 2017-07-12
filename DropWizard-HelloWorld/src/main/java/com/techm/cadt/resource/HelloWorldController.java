package com.techm.cadt.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/")
@Produces(MediaType.APPLICATION_JSON)
public class HelloWorldController {
 
   
    @GET
    @Path("/hello")
    public Response sayHello() {
        
     return Response.ok("Welcome to Dropwizard Tutorial").build();
    }


}