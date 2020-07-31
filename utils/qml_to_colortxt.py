### Convert QGIS qml file to gdal color table.
### Written by Rich Sharp, modified by Charlotte Weil - April 2019


import argparse
import re

parser = argparse.ArgumentParser(description='Parser')
parser.add_argument('--qml', type=str)
parser.add_argument('--txt', type=str)
args = parser.parse_args()

# qml_path = r"//Volumes/GoogleDrive/My Drive/Banco de datos [PRO-Agua]/InVest Resultados/aaa Resultados Marzo 2019/Carbono.qml"
# text_file = open("color_carbono.txt", "w")

def qml_to_txt(qml_path,text_path):

	text_file = open(text_path, "w")

	with open(qml_path, 'r') as qml_file:
	    for qml_line in qml_file:
	        payload = re.search(
	            'alpha="([^"]*)" *value="([^"]*)" *label="([^"]*)" *color="#([^"]*)"', qml_line)
	        if payload:
	            alpha, value, label, colorhex = payload.groups()
	            text_file.write('%f %d %d %d %d \n' % (
	                float(value), *tuple(int(
	                    colorhex[i:i+2], 16) for i in (0, 2, 4)), int(alpha)))
	            
	            
	text_file.close()


if __name__ == '__main__':
    
    qml_to_txt(qml_path=args.qml,
    			text_path=args.txt)