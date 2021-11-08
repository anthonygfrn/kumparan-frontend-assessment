import React, { useState } from 'react';
import { Alert, Card, Container } from 'react-bootstrap';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import PageContainer from '../../components/layout/Container';
import ReturnButton from '../../components/ui/ReturnButton';
import Text from '../../components/ui/Text';
import Col from '../../components/layout/Column';

function Dashboard() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.push('/login');
        } catch {
            setError('Failed to log out');
        }
    }

    return (
        <PageContainer>
            <ReturnButton link={'/users'} text={'Continue to User List'} />
            <Container
                className="d-flex justify-content-center"
                style={{ minHeight: '100vh' }}
            >
                <Col variant="w-100" style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <Text variant="h2 text-center mb-4">Profile</Text>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <strong>Email:</strong> {currentUser.email}
                            <Link
                                to="/update-profile"
                                className="btn btn-primary w-100 mt-3"
                            >
                                Update Profile
                            </Link>
                        </Card.Body>
                    </Card>
                    <Col variant="w-100 text-center mt-2">
                        <Button variant="link" onClick={handleLogout}>
                            Log Out
                        </Button>
                    </Col>
                </Col>
            </Container>
        </PageContainer>
    );
}

export default Dashboard;
