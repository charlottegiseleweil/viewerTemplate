# Convert QGIS qml file to gdal color table.
# Written by Rich Sharp, modified by Charlotte Weil - April 2019


import argparse
import re
import os


parser = argparse.ArgumentParser(description='Parser')
parser.add_argument('--qml', type=str)
args = parser.parse_args()

# qml_path = r"//Volumes/GoogleDrive/My Drive/Banco de datos [PRO-Agua]/InVest Resultados/aaa Resultados Marzo 2019/Carbono.qml"
# text_file = open("color_carbono.txt", "w")


def qml_to_javascript(qml_path):
    print('const ' + os.path.splitext(qml_path)[0] +
          '=(d) =>{ return( ')

    with open(qml_path, 'r') as qml_file:
        for qml_line in qml_file:
            payload = re.search(
                'alpha="([^"]*)" *value="([^"]*)" *label="([^"]*)" *color="#([^"]*)"', qml_line)
            altPayload = re.search(
                'color="#([^"]*)" *label="([^"]*)" *value="([^"]*)" *alpha="([^"]*)"', qml_line)

            if payload:
                alpha, value, label, colorhex = payload.groups()
                print('d <= '+value+' ? "#'+colorhex + '" : ')
            if altPayload:
                colorhex, label, value, alpha = altPayload.groups()
                print('d <= '+value+' ? "#'+colorhex + '" : ')
    print(' null) }')


if __name__ == '__main__':

    qml_to_javascript(qml_path=args.qml)
