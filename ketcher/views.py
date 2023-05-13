from django.shortcuts import render
import json
import os
from rdkit import Chem
from django.template.defaultfilters import escapejs

# Create your views here.
def home(request):
    context={}
    a=Chem.MolToMolBlock(Chem.MolFromSmiles('Cc1ccccc1'))
    context['object_mol']="\\n".join(a.split("\n"))
    context['object_pk']='A001'
    print(context['object_mol'])
    return render(request, 'index.html', context)