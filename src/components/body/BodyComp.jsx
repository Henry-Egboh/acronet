import styled from "styled-components";
import CardCompLeft from "./CardCompLeft";
import CardCompRight from "./CardCompRight";

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

const LeftSection = styled.section({});

const RightSection = styled.section({});


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
// const CardCompLeft = () => {
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
// };


