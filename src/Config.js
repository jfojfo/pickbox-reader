import C from './utils/Constraint.js'

export default {
    api_article_list: {
        type: C.TYPE_OBJECT,
        constraint: {
            success: {
                type: C.TYPE_BOOLEAN,
                value: true
            },
            has_next: {
                type: C.TYPE_BOOLEAN
            },
            articles: {
                type: C.TYPE_ARRAY,
                constraint: {
                    type: C.TYPE_OBJECT,
                    constraint: {
                        id: {
                            type: C.TYPE_STRING,
                            rule: C.notEmpty
                        },
                        title: {
                            type: C.TYPE_STRING,
                            rule: C.notEmpty
                        },
                        feed_title: {
                            type: C.TYPE_STRING,
                            rule: C.notEmpty
                        },
                        img: {
                            type: C.TYPE_STRING,
                            defValue: null,
                            nullable: true
                        },
                        rectime: {
                            type: C.TYPE_STRING,
                            rule: C.notEmpty
                        }
                    }
                }
            }
        }
    },
    api_article: {
        type: C.TYPE_OBJECT,
        constraint: {
            success: {
                type: C.TYPE_BOOLEAN,
                value: true
            },
            article: {
                type: C.TYPE_OBJECT,
                constraint: {
                    id: {
                        type: C.TYPE_STRING,
                        rule: C.notEmpty
                    },
                    title: {
                        type: C.TYPE_STRING,
                        rule: C.notEmpty
                    },
                    content: {
                        type: C.TYPE_STRING,
                        rule: C.notEmpty
                    },
                    feed_title: {
                        type: C.TYPE_STRING,
                        rule: C.notEmpty
                    },
                    time: {
                        type: C.TYPE_STRING,
                        rule: C.notEmpty
                    },
                    url: {
                        type: C.TYPE_STRING,
                        rule: C.notEmpty
                    }
                }
            }
        }
    }
}
