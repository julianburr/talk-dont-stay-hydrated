import { ReactNode } from "react";

import { Window } from "@/components/content/Window";
import { Title } from "@/components/content/Title";
import { Code } from "@/components/content/Code";
import { ListView } from "@/components/notflix/ListView";
import { DetailsView } from "@/components/notflix/DetailsView";
import { NetworkPanel } from "@/components/devtools/NetworkPanel";
import { SourcesPanel } from "@/components/devtools/SourcesPanel";
import { Fin } from "@/components/content/Fin";

import SsrDetails from "@/snippets/ssr/Details.txt";
import SsrLikeButton from "@/snippets/ssr/LikeButton.txt";
import RscDetails from "@/snippets/rsc/Details.txt";
import RscLikeButton from "@/snippets/rsc/LikeButton.txt";
import RscLikeButtonBefore from "@/snippets/rsc/LikeButtonBefore.txt";
import QwikDetails from "@/snippets/qwik/Details.txt";
import QwikLikeButton from "@/snippets/qwik/LikeButton.txt";
import AstroDetails from "@/snippets/astro/Details.txt";
import { rscNodeModules } from "@/devtools/sources/rscNodeModules";
import { craNodeModules } from "@/devtools/sources/craNodeModules";
import { BrowserContent } from "@/components/browser/Content";
import { rscNetwork } from "@/devtools/network/rscNetwork";
import { craNetwork } from "@/devtools/network/craNetwork";
import { SkeletonView } from "@/components/notflix/SkeletonView";
import { HydrationError } from "@/components/browser/HydrationError";

type Era = "html" | "ajax" | "spa" | "ssr" | "rsc";

type Content = {
  era?: Era;
  content?: ReactNode;
};

export const contents: Content[] = [
  // Title page
  {},

  // Plain HTML
  {
    era: "html",
    content: <Title>Good ol’ HTML</Title>,
  },
  {
    era: "html",
    content: <Window title="Netscape" />,
  },
  {
    era: "html",
    content: (
      <Window title="Netscape">
        <BrowserContent era="html" />
      </Window>
    ),
  },

  // AJAX
  { era: "ajax", content: <Title>JS & jQuery</Title> },
  { era: "ajax", content: <Window title="Internet Explorer" /> },
  {
    era: "ajax",
    content: (
      <Window title="Internet Explorer" loading>
        <BrowserContent era="ajax" />
      </Window>
    ),
  },
  {
    era: "ajax",
    content: (
      <Window title="Internet Explorer">
        <BrowserContent era="ajax" hydrated />
      </Window>
    ),
  },

  // SPA
  { era: "spa", content: <Title>The era of single page apps</Title> },
  { era: "spa", content: <Window title="Chrome" /> },
  { era: "spa", content: <Window title="Chrome" loading /> },
  {
    era: "spa",
    content: (
      <Window title="Chrome">
        <BrowserContent era="spa" hydrated />
      </Window>
    ),
  },

  // SSR
  { era: "ssr", content: <Title>Back to the server</Title> },
  { era: "ssr", content: <Window title="Chrome" /> },
  {
    era: "ssr",
    content: (
      <Window title="Chrome" loading>
        <BrowserContent era="ssr" />
      </Window>
    ),
  },
  {
    era: "ssr",
    content: (
      <Window title="Chrome">
        <BrowserContent era="ssr" hydrated />
      </Window>
    ),
  },
  {
    era: "ssr",
    content: (
      <Window title="Chrome">
        <HydrationError />
      </Window>
    ),
  },

  // RSC
  { era: "rsc", content: <Title>Server components</Title> },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <ListView status="idle" />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave" loading>
        <ListView status="loading" />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <ListView status="loaded" />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <ListView status="focused" />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave" loading>
        <DetailsView status="loading" />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <DetailsView status="loaded" />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <DetailsView status="liked" />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={SsrDetails} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={SsrDetails} highlightLines={[15, 16, 17, 18]} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={SsrDetails} highlightLines={[5, 6]} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={SsrLikeButton} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={SsrLikeButton} highlightLines={[1]} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <SkeletonView
          label="SSR"
          devtools={<NetworkPanel items={craNetwork} />}
        />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <SkeletonView
          label="SSR"
          devtools={<SourcesPanel items={craNodeModules} />}
        />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={SsrDetails} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={RscDetails} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={RscDetails} highlightLines={[5]} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={RscDetails} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={RscLikeButtonBefore} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={RscLikeButton} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <SkeletonView
          label="SSR"
          devtools={<NetworkPanel items={craNetwork} />}
        />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <SkeletonView
          label="RSC"
          devtools={<NetworkPanel items={rscNetwork} />}
        />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <SkeletonView
          label="RSC"
          devtools={<NetworkPanel items={rscNetwork} highlightItems={[0]} />}
        />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <SkeletonView
          label="RSC"
          devtools={
            <NetworkPanel
              items={rscNetwork}
              highlightItems={[4, 5, 6, 7, 8, 9, 10]}
            />
          }
        />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <SkeletonView
          label="SSR"
          devtools={<SourcesPanel items={craNodeModules} />}
        />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="Brave">
        <SkeletonView
          label="RSC"
          devtools={<SourcesPanel items={rscNodeModules} />}
        />
      </Window>
    ),
  },

  // Astro + Qwik
  {
    era: "rsc",
    content: <Title>Astro & Qwik</Title>,
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={AstroDetails} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code
          code={AstroDetails}
          highlightLines={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={AstroDetails} highlightLines={[12, 13, 14, 15]} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={AstroDetails} highlightLines={[17, 18, 19]} />
      </Window>
    ),
  },

  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={QwikDetails} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={QwikDetails} highlightLines={[4, 5, 6, 7, 8, 9]} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={QwikLikeButton} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: (
      <Window title="VS Code">
        <Code code={QwikLikeButton} highlightLines={[7, 8, 9]} />
      </Window>
    ),
  },
  {
    era: "rsc",
    content: <Title>Are Server Components the future?</Title>,
  },

  // Fin
  {
    era: "rsc",
    content: <Fin />,
  },
];

export type { Era };
