
#include <string>
#include <iostream>
#include <map>

#include<vector>
#include "search.h"
#include <crow.h>
#include "auth.h"
#include "database.h"
#include "Admin.h"
#include "crow/middlewares/cors.h"
#include "files.h"
#include<string>

using namespace std;






int main()
{
    files f;
    f.readListings();
   

   

    crow::App<crow::CORSHandler> app;

    // Customize CORS
    
   
    user* User = new user("m", "m@m.com", "123456789", "1212");
    User->isAdmin = true;
    usersList.push_back(User);

    CROW_ROUTE(app, "/auth/register")
        .methods("POST"_method)
        ([](const crow::request& req) {
        if (!req.body.empty()) {
            crow::json::rvalue json = crow::json::load(req.body);

            if (!json) {
                return crow::response(400);
            }
            crow::response response;
            response.set_header("Content-Type", "application/json"); 
            response.set_header("Access-Control-Allow-Origin", "*"); 
           


            string name = json["username"].s();
            string password = json["password"].s();
            string email = json["Email"].s();
            string phone = json["Phone"].s();
            Auth* auth = new Auth();
            string res = auth->registerUser(name, email, password, phone);
            response.body = "{message:" + res + "}";

            return response;
        }
        else {
            return crow::response(400);
        }
            });
    CROW_ROUTE(app, "/list")
        .methods("POST"_method)
        ([](const crow::request& req) {
        if (!req.body.empty()) {
            crow::json::rvalue json = crow::json::load(req.body);

            if (!json) {
                return crow::response(400);
            }
            crow::response response;
            response.set_header("Content-Type", "application/json");
            response.set_header("Access-Control-Allow-Origin", "*");



            string name = json["name"].s();
            string location = json["location"].s();
            string phone = json["phone"].s();
            int price = json["price"].i();
            int rooms = json["rooms"].i();
            string type = json["type"].s();
            files f;
            
            f.writeListings(name, location, to_string(price), phone, type, to_string(rooms));
            database db;
            db.addListing(price, name, location,phone,type,rooms);
            
            response.body = "{message:succcess}";

            return response;
        }
        else {
            return crow::response(400);
        }
            });
    
    CROW_ROUTE(app, "/auth/login")
        .methods("POST"_method)
        ([](const crow::request& req, crow::response& response) {
        string key = "Access-Control-Allow-Origin";
        string value = "*";
        response.add_header(key, value);
        if (!req.body.empty()) {
            crow::json::rvalue json = crow::json::load(req.body);
            if (!json) {
                response.code = 400;
                response.end() ;
            }




            string email = json["Email"].s();
            string password = json["password"].s();

            Auth* auth = new Auth();
            user* res = auth->loginUser(email, password);
            if (!res) {
                response.code = 400;
                response.end();
                return;
            }
            
            string isadmin = res->isAdmin ? "true" : "false";
            response.write(email+"-" +isadmin);
            response.end();
        }
        else {
           
            response.code = 400;
            response.end();
        }
            });
    CROW_ROUTE(app, "/search")
        .methods("POST"_method)
        ([](const crow::request& req, crow::response& response) {
        string key = "Access-Control-Allow-Origin";
        string value = "*";
        response.add_header(key, value);
        if (!req.body.empty()) {
            crow::json::rvalue json = crow::json::load(req.body);
            if (!json) {
                response.code = 400;
                response.end();
            }




            string pre = json["pre"].s();
            int min = json["min"].i();
            int max = json["max"].i();
            string location = json["loc"].s();
            Search* s = new Search();
            vector<property*> result = s->searchGlobal(min, max, pre, location);


            string res = "[";
            for (property* i : result) {
                string appr = i->approved ? "true" : "false";
                res += "{" + appr + "," + to_string(i->id) + "," + i->location + "," + i->name + "," + i->phone + "," + to_string(i->price) +"," +i->type+","+to_string( i->rooms) + "},";
            }
            res[res.size() - 1] = ']';

            response.write(res);

           
            response.end();
        }
        else {

            response.code = 400;
            response.end();
        }
            });
    CROW_ROUTE(app, "/approve")
        .methods("POST"_method)
        ([](const crow::request& req, crow::response& response) {
        string key = "Access-Control-Allow-Origin";
        string value = "*";
        response.add_header(key, value);
        if (!req.body.empty()) {
            crow::json::rvalue json = crow::json::load(req.body);
            if (!json) {
                response.code = 400;
                response.end();
            }




            string id = json["id"].s();
          

            Admin* admin = new Admin();
            admin->approveProperty(stoi(id));

            

            response.write("{message:success}");
            response.end();
        }
        else {

            response.code = 400;
            response.end();
        }
            });
    CROW_ROUTE(app, "/delete")
        .methods("POST"_method)
        ([](const crow::request& req, crow::response& response) {
        string key = "Access-Control-Allow-Origin";
        string value = "*";
        response.add_header(key, value);
        if (!req.body.empty()) {
            crow::json::rvalue json = crow::json::load(req.body);
            if (!json) {
                response.code = 400;
                response.end();
            }




            int id = json["id"].i();


            Admin* admin = new Admin();
            if (id)
                admin->deleteProperty(id);



            response.write("{message:success}");
            response.end();
        }
        else {

            response.code = 400;
            response.end();
        }
            });
    CROW_ROUTE(app, "/all")
        .methods("GET"_method)
        ([](const crow::request& req, crow::response& response) {
        string key = "Access-Control-Allow-Origin";
        string value = "*";
      
        response.add_header(key, value);
           


        string res = "[";
            for (property* i : listings) {
                string appr = i->approved ? "true" : "false";
                res += "{" + appr + "," + to_string(i->id) + "," + i->location + "," + i->name + "," + i->phone + "," + to_string(i->price) +"," +i->type+","+to_string( i->rooms) + "},";
            }
            res[res.size() - 1] = ']';

            response.write(res);
            response.end();
        
       
            });

    app.port(3000).multithreaded().run();
    return 0;

}




