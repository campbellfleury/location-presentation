var config = {
    style: 'mapbox://styles/ospri-gis/ckg6am29b1u7c19tlllugve7y',
    accessToken: 'pk.eyJ1Ijoib3NwcmktZ2lzIiwiYSI6ImNqNjRhaWV5dTFweXcyd28zam1oaWt6aTkifQ.x7y9I6HhzU32xlZ0e3ZhFg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    // title: 'location',
    // subtitle: 'location model',
    byline: 'A proposal for a national location model',
    footer: 'fin.',
    chapters: [
        {
            id: '01-new-zealand',
            //title: 'parcels',
            description: 'Our programmes cover the majority of New Zealand, so we need a location model that responds to the variance that comes with.',
            location: {
                center: { lon: 174.40048, lat: -41.04806 },
                zoom: 5.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '02-parcel',
            description: "Our model uses LINZ Primary Land Parcels as its basic building block.",
            location: {
                center: [171.24792, -44.25276],
                zoom: 13.62,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'parcels',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parcels',
                    opacity: 0
                }
            ]
        },
        {
            id: '03-parcel-id',
            description: "Each parcel has a unique identifier, they do not overlap, and the dataset covers the whole country including outlying islands.",
            location: {
                center: [171.24792, -44.25276],
                zoom: 13.62,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'parcels',
                    opacity: 1
                },
                {
                    layer: 'parcel-labels',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parcels',
                    opacity: 0
                },
                ,
                {
                    layer: 'parcel-labels',
                    opacity: 0
                }
            ]
        },
        {
            id: '04-farm-id',
            description: "When a farming location is registered we assign a Location Id to a group of parcels.",
            location: {
                center: [171.24792, -44.25276],
                zoom: 13.62,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'parcels',
                    opacity: 1
                },
                {
                    layer: 'farm',
                    opacity: 1
                },
                {
                    layer: 'farm-label-id',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parcels',
                    opacity: 0
                },
                {
                    layer: 'farm',
                    opacity: 0
                },
                {
                    layer: 'farm-label-id',
                    opacity: 0
                }
            ]
        },
        {
            id: '04-farm-number',
            description: "We also assign the location a Number, this number represents the link between the person and the location. It is also the number used to record movements.",
            location: {
                center: [171.24792, -44.25276],
                zoom: 13.62,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'parcels',
                    opacity: 1
                },
                {
                    layer: 'farm',
                    opacity: 1
                },
                {
                    layer: 'farm-label-number',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parcels',
                    opacity: 0
                },
                {
                    layer: 'farm',
                    opacity: 0
                },
                {
                    layer: 'farm-label-number',
                    opacity: 0
                }
            ]
        },
        {
            id: '05-saleyard',
            title: "Non-farm location - Saleyard",
            description: "Non-farm locations that handle animals are also registered in the same way, however they are assigned multiple Numbers (one for each person/org) and a single Location Id.",
            location: {
                center: { lon: 171.27354, lat: -44.24238 },
                zoom: 14.65,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'parcels',
                    opacity: 1
                },
                {
                    layer: 'saleyard',
                    opacity: 1
                },
                {
                    layer: 'saleyard-label-number',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'parcels',
                    opacity: 0
                },
                {
                    layer: 'saleyard',
                    opacity: 0
                },
                {
                    layer: 'saleyard-label-number',
                    opacity: 0
                }
            ]
        },
        {
            id: '06-importexport',
            title: "Non-farm location - Import/Export Facility",
            description: "We do this so that we're maintaining a link between the location of animals whilst protecting the seperation of person/organisation information.",
            location: {
                center: { lon: 171.25738, lat: -44.38966 },
                zoom: 14.65,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'importexport',
                    opacity: 1
                },
                {
                    layer: 'importexport-label-number',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'importexport',
                    opacity: 0
                },
                {
                    layer: 'importexport-label-number',
                    opacity: 0
                }
            ]
        },
        {
            id: '07-forestry',
            title: "Non-NAIT Location - Forestry Block",
            description: "We also have a need register locations within our operational space that are not related to cattle/deer at all. We can register a group of parcels, assign stakeholders, and then reference this in our other systems (e.g. CRM).",
            location: {
                center: { lon: 171.06665, lat: -44.10783 },
                zoom: 11.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'forestry',
                    opacity: 1
                },
                {
                    layer: 'forestry-label-id',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'forestry',
                    opacity: 0
                },
                {
                    layer: 'forestry-label-id',
                    opacity: 0
                }
            ]
        }
    ]
};
