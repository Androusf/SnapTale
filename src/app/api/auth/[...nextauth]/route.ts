import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

// Initialize NextAuth with GitHub provider for authentication
const handler = NextAuth({
    providers: [
        GitHubProvider({
          // Configure GitHubProvider with client ID and client secret
          clientId: process.env.GITHUB_ID as string, // GitHub OAuth App Client ID
          clientSecret: process.env.GITHUB_SECRET as string, // GitHub OAuth App Client Secret
        })
      ]
})

// Export the NextAuth handler for both GET and POST requests
export { handler as GET, handler as POST }
