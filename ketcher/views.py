from django.shortcuts import render
import json
import os
from rdkit import Chem
from django.template.defaultfilters import escapejs

# Create your views here.
def home(request):
    context={}
    a=Chem.MolToMolBlock(Chem.MolFromSmiles('CC(C)([C@@H]1C(O)=O)S[C@H]([C@@H]2NC([C@@H](c(cc3)ccc3O)N)=O)N1C2=O'))
    context['object_mol']="\\n".join(a.split("\n"))
    context['object_pk']='A001'
    print(context['object_mol'])
    return render(request, 'index.html', context)