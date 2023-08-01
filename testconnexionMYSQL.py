from flask import Flask, jsonify,render_template,request
from flask_cors import CORS
import mysql.connector
from bs4 import BeautifulSoup, NavigableString,Tag
app = Flask(__name__)
CORS(app)


#fonction qui se connecte à la base de données pour faire une requête select et formatte la sortie
@app.route('/getpoids', methods=['GET'])
def get_poids():
    with app.app_context() : 
        con = mysql.connector.connect(user='pythonuser', password='#S.ei7c.BDD',
                                host='172.16.148.2',
                                database='paprec_seiches')
        c = con.cursor()
        c.execute("SELECT * FROM POIDS")
        data = []
        for (code, nom, poids) in c:
            data.append("{}, {} , {}".format(code, nom, poids ))

        c.close()  
        con.close()
        return data
    
    
#fonction qui met en forme le tableau
@app.route('/')    
def get_tab():
        with app.app_context() : 
      #ouverture d'un document html type
            html_doc =  open(r".\templates\template2.html", "r")
            soup = BeautifulSoup(html_doc, 'html.parser')     
            data = get_poids()
            id =0
            for d in data : 
                
                code = d.split(',')[0]
                nom = d.split(',')[1]
                poids = d.split(',')[2]
                
                
                
            #on se place au niveau de table
                for p in soup.find_all("table"):
                            
                            
                                if isinstance(p, NavigableString):
                                    continue

                                n = BeautifulSoup("<tr><td id = ""code{}""> {} </td><td id = ""poids""{}> {} </td><td><input type=""text"" id=""modify{}"" name=""name"" size=""10""> </td><td> <button  type=""button""  id = ""bouton{}"" style="" border-radius:10px;"">Modifier le poids</button> </td></tr>".format(str(id),str(code),str(id),float(poids),str(id),str(id)) ,features="html.parser")
                                p.append(n) 
                                id+=1
                                
                                
                                
           
            #création d'un autre fichier html pour héberger les modifiations
            new = open(r'.\templates\index2.html', "w")
            
            new.write(str(soup))
            new.close()
            html_doc.close()

            return render_template('index2.html')



        

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

   
            print (c.rowcount,code, newpoids)
            return {}
      
        

#main crée le serveur sur le port 1701
if __name__ == '__main__':
    get_tab()
    app.run(host="0.0.0.0", port=1701)









