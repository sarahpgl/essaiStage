from flask import Flask, jsonify,render_template,request
from flask_cors import CORS
import mysql.connector
from bs4 import BeautifulSoup, NavigableString,Tag
app = Flask(__name__)
CORS(app)


#fonction qui se connecte à la base de données pour faire une requête select et formatte la sortie
@app.route('/', methods=['GET'])
def get_poids():
    with app.app_context() : 
        con = mysql.connector.connect(user='pythonuser', password='#S.ei7c.BDD',
                                host='172.16.148.2',
                                database='paprec_seiches')
        
        c = con.cursor()
        c.execute("SELECT * FROM POIDS")
        posts= c.fetchall()
        
        
        c.close()  
        con.close()
        return render_template('templatepoids.html', posts = posts)
    
    



        

#fonction qui est appelée par le js et qui permet de faire une requête d'update à la base de données        
@app.route('/test', methods=['GET', 'POST'])    
def set_poids():
    with app.app_context() : 
             
            arg = request.args
            arg = str(arg).split("'")
            newpoids = arg[3]
            code = arg[7]
    
            con = mysql.connector.connect(user='pythonuser', password='#S.ei7c.BDD',
                                host='172.16.148.2',
                                database='paprec_seiches')
            c = con.cursor()
    
            set_p = ("UPDATE paprec_seiches.poids SET p = {} where code = '{}';".format(newpoids, code))
            
            
            result = c.execute(set_p)
            con.commit()
            c.close()  
            con.close()

   
            
            return {}
      
        

#main crée le serveur sur le port 1701
if __name__ == '__main__':
    get_poids()
    app.run(host="0.0.0.0", port=1702)









