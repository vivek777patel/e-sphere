import json
import graphene

jData = json.loads(open('./static/data/data.json').read())
data = jData["Employee"]
employees = []


class Employee(graphene.ObjectType):
    id = graphene.String()
    name = graphene.String()
    sname = graphene.String()
    email = graphene.String()
    age = graphene.Int()
    nationality = graphene.String()
    gender = graphene.String()
    salary = graphene.String()
    blood_group = graphene.String()
    designation = graphene.String()


for i in range(len(data)):
    e = Employee()
    e.id = data[i]["id"]
    e.name = data[i]["name"]["text"]
    e.sname = data[i]["sname"]
    e.email = data[i]["email"]
    e.age = data[i]["name"]["age"]
    e.nationality = data[i]["name"]["nationality"]
    e.gender = data[i]["gender"]["type"]
    e.salary = data[i]["salary"]
    e.blood_group = data[i]["bloodgroup"]["type"]
    e.designation = data[i]["designation"]
    employees.append(e)

class Query(graphene.ObjectType):

    # Create a field on which we can query and the attributes
    # we allow to query on
    employee = graphene.List(Employee, id=graphene.String())
    all_employees = graphene.List(Employee)

    def resolve_all_employees(self, info, args, context, **kwargs):
        return employees

    def resolve_employee(self, context, info, args):
        if bool(context):
            nid = context.get('id')
        elif bool(info):
            nid = info.get('id')

        for e in employees:
            if e.id == nid:
                return [e]


schema = graphene.Schema(query=Query)