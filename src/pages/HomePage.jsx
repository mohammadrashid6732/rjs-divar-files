import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../services/user";
import Sidebar from "../components/templates/Sidebar";
import Main from "../components/templates/Main";
import Loader from "../components/modules/Loader";
import { getCategory } from "../services/admin";

const style = { display: "flex" };

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery({
    queryKey: ["post-list"],
    queryFn: getAllPosts,
  });
  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });
  console.log(categories);
  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
