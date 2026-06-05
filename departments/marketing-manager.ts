export function assignMarketingAgent(
  task: string
) {

  const prompt =
    task.toLowerCase();

  if (
    prompt.includes("seo")
  ) {
    return "seo-agent";
  }

  if (
    prompt.includes(
      "content"
    )
  ) {
    return "content-agent";
  }

  if (
    prompt.includes(
      "video"
    )
  ) {
    return "video-agent";
  }

  if (
    prompt.includes("ad")
  ) {
    return "ads-agent";
  }

  return "seo-agent";
}