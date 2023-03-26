from django.shortcuts import render
import json
import os
from rdkit import Chem
from django.template.defaultfilters import escapejs

# Create your views here.
def home(request):
    context={}
    a=Chem.MolToMolBlock(Chem.MolFromSmiles('Cc1ccccc1'))
    # "\n  Ketcher  9282116442D 1   1.00000     0.00000     0\n\n  6  6  0  0  0  0            999 V2000\n    9.5500  -11.7000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   10.4160  -12.2000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   10.4160  -13.2000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    9.5500  -13.7000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    8.6840  -13.2000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    8.6840  -12.2000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  1  0     0  0\n  2  3  1  0     0  0\n  3  4  1  0     0  0\n  4  5  1  0     0  0\n  5  6  1  0     0  0\n  6  1  1  0     0  0\nM  END\n"
    context['object_mol']="\\n".join(a.split("\n"))
    print(context['object_mol'])
    return render(request, 'index.html', context)