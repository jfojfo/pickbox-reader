<template>
    <div>{{{ content }}}</div>
</template>

<script type="text/ecmascript-6">
    import API from './helper/API_Proxy'

    export default{
        props: ['content'],

        attached () {
            console.log('ArticleContent attached')

            $('img', this.$el).one('error', (event) => {
                var img = event.currentTarget
                var url = img.src

                if (!url) {
                    return
                }

                console.log('fetch img: ' + url)

                API.fetchImgData(url).done((result) => {
                    var headers = result.headers
                    var data = result.data.data
                    var contentType = headers['content-type'] || 'image/jpeg'

                    var arrayBufferView = new Uint8Array(data)
                    var blob = new Blob([arrayBufferView], { type: contentType })
                    var urlCreator = window.URL || window.webkitURL
                    var imageUrl = urlCreator.createObjectURL( blob )
                    img.src = imageUrl
                })
            })
        }
    }

</script>