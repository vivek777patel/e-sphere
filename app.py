#! usr/bin/python
# -*- coding: utf-8 -*-

from flask import Flask, render_template,jsonify
from flask_graphql import GraphQL,GraphQLView
from schema import *
from queries import *

app = Flask(__name__, static_folder="./static/dist", template_folder="./static")
app.debug = True
app.add_url_rule('/graphiql', view_func=GraphQLView.as_view('graphiql', schema=schema, graphiql=True))


@app.route('/')
def index():
	return render_template("index.html")


@app.route('/getAllEmployee/')
@app.route('/getAllEmployee/<string:eid>/')
def getAllEmployee(eid=''):
	nschema = graphene.Schema(query=Query)
	if not eid:
		myquery = query_all
		result = nschema.execute(myquery)
	else:
		myquery = query
		result = nschema.execute(myquery, context_value={'id': eid})
	print (result.data)
	return jsonify(result.data)


if __name__ == "__main__":
	app.run(host='0.0.0.0',use_reloader=True)
