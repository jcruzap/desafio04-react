import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const CardWidget = () => (
    <Card style={{ width: '6rem' }}>
        <Card.Body>
            <Image
                floated='right'
                size='mini'
                src='https://www.pngwing.com/es/free-png-bwggt'
            />
        </Card.Body>
    </Card>
)

export default CardWidget;