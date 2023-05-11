from django.test import TestCase, RequestFactory
from .views import home

class HomeViewTest(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.maxDiff = None

    def test_home_view(self):
        request = self.factory.get('/')
        response = home(request)
        self.assertEqual(response.status_code, 200)
#         expected_molblock = """\
#             RDKit          2D
          
#      7  7  0  0  0  0  0  0  0  0999 V2000
#     3.0000    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0
#     1.5000    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
#     0.7500   -1.2990    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
#    -0.7500   -1.2990    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
#    -1.5000    0.0000    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
#    -0.7500    1.2990    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
#     0.7500    1.2990    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0
#   1  2  1  0
#   2  3  2  0
#   3  4  1  0
#   4  5  2  0
#   5  6  1  0
#   6  7  2  0
#   7  2  1  0
# M  END"""
#         self.assertEqual(response.content.decode('utf-8').strip(), expected_molblock.strip())
        # Add more assertions as needed