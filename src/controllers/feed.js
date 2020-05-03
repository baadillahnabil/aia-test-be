/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import xml2js from 'xml2js'
import { map, find } from 'lodash'

export const getFeeds = (req, res) => {
  axios
    .get('https://api.flickr.com/services/feeds/photos_public.gne')
    .then((response) =>
      xml2js.parseString(response.data, (error, result) => {
        res.status(200).json({
          success: true,
          data: map(result.feed.entry, (data) => ({
            author: {
              name: data.author[0].name[0],
              avatar: data.author[0]['flickr:buddyicon'][0],
              url: data.author[0].uri[0]
            },
            content: {
              image: find(data.link, (link) => link.$.rel === 'enclosure').$
                .href,
              source: find(data.link, (link) => link.$.rel === 'alternate').$
                .href
            },
            title: data.title[0],
            published_date: data.published[0],
            updated_date: data.updated[0]
          }))
        })
      })
    )
    .catch(() => {
      res.status(500).json({
        success: false,
        message: 'Server Error!'
      })
    })
}
