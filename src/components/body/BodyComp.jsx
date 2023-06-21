import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.main({
  display: "grid",
  gridTemplateColumns: "1fr 30rem",
  padding: "4rem 2rem",
  gap: "2rem 6rem",
  fontSize: "1rem",
  fontWeight: "400",
  color: "#000",

  h1: {
    color: "hsla(234, 28%, 28%, 0.8)",
    fontWeight: "600",
  },
});

const LeftSection = styled.section({
  
});

const RightSection = styled.section({});

// card items on the right
const Card = styled.div({
  //   boxShadow: "0rem 0rem 1rem rgba(0, 0, 0, 0.2)",
  //   backgroundColor: "rgb(245, 233, 255)",
  padding: "2rem 0rem",
  borderRadius: "0.5rem",
  borderBottom: "1px solid #ccc",
});

// card items on the left
const CardLeft = styled.div({
  marginBottom: '1rem',
  backgroundColor: 'rgba(240, 240, 240, 0.6)',
})

// main component
export const BodyComp = () => {
  return (
    <Container>
      {/* left section */}
      <LeftSection>
        <CardCompLeft />
      </LeftSection>
      {/* right section */}
      <RightSection>
        <CardCompRight />
      </RightSection>
    </Container>
  );
};

// card component left
const CardCompLeft = () => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios("https://randomuser.me/api")
  //     .then((response) => {
  //       setData(response.data);
  //     })

  //     .catch((error) => {
  //       console.error("Error Occured: ", error);
  //       setError(error);
  //     })

  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return "loading ...";
  // if (error) return "Error!";
  // return (
  //   <>
  //     <CardLeft>
  //       <img alt="img" src={data.results[0].picture.medium} />
  //       <pre>{JSON.stringify(data, null, 2)}</pre>
  //     </CardLeft>
  //   </>
  // );
};

const CardCompRight = () => {
  const usersUrl = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  // fetch users
  const fetchUsers = () => {
    return fetch(usersUrl)
      .then((res) => res.json())
      .then((username) => setUsers(username));
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((dt) => {
        return (
          <div key={dt.id}>
            <Card>
              <div>
                <p>Name: {dt.name}</p>
                <p>UserName: {dt.username}</p>
                <p>Company: {dt.company.name}</p>
                <p>Address: {dt.company.catchPhrase}</p>
              </div>
            </Card>
          </div>
        );
      })}
    </>
  );
};
