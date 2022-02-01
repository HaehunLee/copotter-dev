import Layout from "@/components/Layout";
import { testState } from "@/recoil/board/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

const IndexPage = () => {
  const [test, setTest] = useRecoilState(testState);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <button
        onClick={() => {
          setTest("변경값");
        }}
      >
        테스트 값 변경
      </button>
      <p>test: {test}</p>
    </Layout>
  );
};

export default IndexPage;
