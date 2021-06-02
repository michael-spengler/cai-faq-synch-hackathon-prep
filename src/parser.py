from markdown_to_json.markdown_to_json import Renderer, CMarkASTNester
from contextlib import contextmanager
import json
import logging
import markdown_to_json
from markdown_to_json.vendor.docopt import docopt
from markdown_to_json.vendor import CommonMark
import sys


def get_markdown_ast(markdown_file):
    try:
        f = open(markdown_file, 'r')
        return CommonMark.DocParser().parse(f.read())
    except:
        logging.error("Error: Can't open {0} for reading".format(
            markdown_file))
        sys.exit(1)
    finally:
        f.close()

def returns_dict(key,value):
    sublist=[{"value":""}]
    template = dict({"value":"","disabled":False,"questions_attributes":sublist} )
    template["value"]=value
    template["questions_attributes"][0]["value"]=key
    return json.dumps(template)


def jsonify_markdown(markdown_file, indent):
    nester = CMarkASTNester()
    renderer = Renderer()
    ast = get_markdown_ast(markdown_file)
    nested = nester.nest(ast)
    rendered = renderer.stringify_dict(nested)
    a=json.dumps(rendered, indent=indent)
    return rendered

def change_json_format(odictjson):
    qa_list=[]
    for key,value in odictjson.items():
        qa_list.append(returns_dict(key,value))
    return qa_list


def main():
    odictjson = jsonify_markdown("Example.md", 2)
    faq_list = change_json_format(odictjson)
    return faq_list

if __name__ == "__main__":
    main()