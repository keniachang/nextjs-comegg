import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    const data = await db
        .collection('gpus')
        .aggregate([
            {
                $search: {
                    search: {
                        query: req.query.term,
                        path: [
                            'brand',
                            'series',
                            'chipsetManufacturer',
                            'gpuModel'
                        ]
                    }
                }
            },
            {
                $project: {
                    brand: 1,
                    series: 1,
                    gpuModel: 1,
                    price: 1,
                    image: 1
                }
            }
        ])
        .toArray();

    res.json(data);
}
