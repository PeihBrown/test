import { Text } from '../../components/text'
import { Button } from '../../components/button'

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-background-paper">
      <div className="text-center space-y-8">
        <Text as="h1" size="h1" variant="primary-main">
          Coming Soon
        </Text>
        
        <Text size="body1" variant="neutral-dark" className="max-w-lg">
          We're working hard to bring you something amazing. 
          Stay tuned for updates!
        </Text>

        <Button 
          size="lg"
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </div>
    </div>
  )
}
