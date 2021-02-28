import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/png/instagram.png'
import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <Container>
                <Grid>
                    <Grid.Column width={3} className="header_logo">
                        <Link to="/">
                            <Image src={Logo} alt="instagram" />
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <p>Buscador</p>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <p>Opciones</p>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}
