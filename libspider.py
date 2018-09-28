#! /usr/bin/env python3
# ! -*- coding: utf-8 -*-

from lxml import etree

import json
import requests


class libspider(object):
    data = {}

    def __init__(self):
        pass

    def get_src(self):
        res = requests.get(r'http://www.library.gov.mo/zh-hant/branch-libraries/public-library')
        return res

    def parse(self, data):
        data = etree.HTML(data)
        # get divs
        lib_list = data.xpath("//*[@class='panel panel-default ']")
        lib_list += data.xpath("//*[@class='panel panel-default top-line']")
        # get data
        detail_info = {}
        for lib in lib_list:
            detail_info = {}
            title = lib.xpath('.//*[@class="panel-title"]/text()')[0].strip()
            detail = lib.xpath('.//*[@class="detail-info"]/p')
            for info in detail:
                info_name = info.xpath('.//b/text()')[0]
                # filter
                if info_name == "圖書館活動：" or info_name == "附近之圖書館：":
                    continue
                info_content = info.xpath('./text()')[0]
                detail_info[info_name[:-1]] = info_content
            self.data[title] = detail_info
        # return
        return self.data


    def save_json(self, data, path='data.json'):
        with open(path, 'w') as f:
            json.dump(data, f)

    def run(self):
        res = self.get_src()
        data = self.parse(res.content.decode('utf-8'))
        self.save_json(data)


if __name__ == '__main__':
    spider = libspider()
    spider.run()
