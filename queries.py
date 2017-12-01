### For Hardcoded values
	# query = '''
	# 	{
	# 		employee(id:"e1") {
	# 			id
	# 			sname
	# 		}
	# 	}
	# '''
	# result = nschema.execute(query)

	### Parameterized query
query = '''
			query($id: String)	{
				employee(id:$id) {
					id
                    name
                    sname
                    email
                    gender
                    designation
                    salary
                    bloodGroup
				}
			}
		'''
query_all = '''
			{
			  allEmployees
			  {
				id
                name
                sname
                email
                gender
                designation
                salary
                bloodGroup
			  }
			}
		'''
