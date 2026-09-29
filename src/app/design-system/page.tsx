'use client'

import {
  Button,
  Container,
  Section,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  H1,
  H2,
  H3,
  H4,
  Heading,
  Badge,
  Link,
} from '@/components/ui'

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen">
      {/* Typography Section */}
      <Section className="bg-neutral-50">
        <Container>
          <H1>Design System Showcase</H1>
          <p className="text-lg text-neutral-600">
            Complete overview of Atelier Store's design system components and tokens
          </p>
        </Container>
      </Section>

      {/* Typography Samples */}
      <Section>
        <Container>
          <H2>Typography</H2>

          <div className="space-y-8 mb-12">
            <div>
              <H1>Heading 1 - Main Page Title</H1>
              <p className="text-sm text-neutral-500 mt-2">
                clamp(2.25rem, 8vw, 3.75rem) • serif • 400 weight
              </p>
            </div>

            <div>
              <H2>Heading 2 - Section Title</H2>
              <p className="text-sm text-neutral-500 mt-2">
                clamp(1.875rem, 5vw, 2.25rem) • serif • 400 weight
              </p>
            </div>

            <div>
              <H3>Heading 3 - Subsection</H3>
              <p className="text-sm text-neutral-500 mt-2">
                clamp(1.5rem, 3vw, 1.875rem) • serif • 400 weight
              </p>
            </div>

            <div>
              <H4>Heading 4 - Feature Title</H4>
              <p className="text-sm text-neutral-500 mt-2">
                1.25rem • serif • 500 weight
              </p>
            </div>

            <div>
              <h5 className="text-neutral-900 font-semibold text-sm">
                HEADING 5 - UPPERCASE LABEL
              </h5>
              <p className="text-sm text-neutral-500 mt-2">
                1rem • sans • 600 weight • uppercase
              </p>
            </div>

            <div>
              <p>
                Body text: This is a paragraph of regular body text. It uses the system font stack
                for optimal readability across devices. The line height is set to 1.5 for
                comfortable reading.
              </p>
              <p className="text-sm text-neutral-500 mt-2">1rem • sans • 400 weight • lh-1.5</p>
            </div>
          </div>

          <div className="divider my-12" />

          {/* Color Palette */}
          <H2>Color Palette</H2>
          <div className="grid grid-cols-2 gap-6 mb-12 md:grid-cols-4">
            {[
              { name: 'Neutral 50', color: 'bg-neutral-50', border: true },
              { name: 'Neutral 100', color: 'bg-neutral-100' },
              { name: 'Neutral 200', color: 'bg-neutral-200' },
              { name: 'Neutral 300', color: 'bg-neutral-300' },
              { name: 'Neutral 400', color: 'bg-neutral-400' },
              { name: 'Neutral 500', color: 'bg-neutral-500' },
              { name: 'Neutral 600', color: 'bg-neutral-600' },
              { name: 'Neutral 700', color: 'bg-neutral-700' },
              { name: 'Neutral 800', color: 'bg-neutral-800' },
              { name: 'Neutral 900', color: 'bg-neutral-900' },
              { name: 'Red (Accent)', color: 'bg-red-700' },
              { name: 'Gold (Accent)', color: 'bg-yellow-600' },
            ].map((swatch) => (
              <div key={swatch.name} className="space-y-2">
                <div
                  className={`h-24 rounded-lg ${swatch.color} ${swatch.border ? 'border border-neutral-300' : ''}`}
                />
                <p className="text-sm font-medium">{swatch.name}</p>
              </div>
            ))}
          </div>

          <div className="divider my-12" />

          {/* Buttons */}
          <H2>Buttons</H2>
          <div className="space-y-8 mb-12">
            <div>
              <h5 className="font-semibold mb-4 text-neutral-700">Primary Button</h5>
              <div className="flex gap-4 flex-wrap items-center">
                <Button>Primary Button</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-neutral-700">Secondary Button</h5>
              <div className="flex gap-4 flex-wrap items-center">
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" size="sm">
                  Small
                </Button>
                <Button variant="secondary" size="lg">
                  Large
                </Button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-neutral-700">Tertiary Button</h5>
              <div className="flex gap-4 flex-wrap items-center">
                <Button variant="tertiary">Tertiary Button</Button>
                <Button variant="tertiary" size="sm">
                  Small
                </Button>
                <Button variant="tertiary" size="lg">
                  Large
                </Button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-neutral-700">Accent Button</h5>
              <div className="flex gap-4 flex-wrap items-center">
                <Button variant="accent">Accent Button</Button>
                <Button variant="accent" size="sm">
                  Small
                </Button>
                <Button variant="accent" size="lg">
                  Large
                </Button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-neutral-700">Full Width</h5>
              <Button full>Full Width Button</Button>
            </div>
          </div>

          <div className="divider my-12" />

          {/* Links */}
          <H2>Links</H2>
          <div className="space-y-4 mb-12">
            <div>
              <Link href="#" className="mr-6">
                Standard Link
              </Link>
              <Link href="#" underlined>
                Underlined Link
              </Link>
            </div>
          </div>

          <div className="divider my-12" />

          {/* Cards */}
          <H2>Cards</H2>
          <Grid cols={3} className="mb-12">
            <Card>
              <H4>Default Card</H4>
              <p className="text-neutral-600">
                Features border and subtle shadow on hover.
              </p>
            </Card>

            <Card variant="elevated">
              <H4>Elevated Card</H4>
              <p className="text-neutral-600">
                Always displays shadow, no border.
              </p>
            </Card>

            <Card variant="flat">
              <H4>Flat Card</H4>
              <p className="text-neutral-600">
                Light gray background, minimal styling.
              </p>
            </Card>
          </Grid>

          <H3 className="mb-6">Structured Card</H3>
          <Card className="max-w-md mb-12">
            <CardHeader>
              <H4>Product Card</H4>
            </CardHeader>
            <CardBody>
              <p className="text-neutral-600 mb-4">
                This is a complete card with header, body, and footer sections.
              </p>
              <Badge>Featured</Badge>
            </CardBody>
            <CardFooter>
              <Button full>Add to Cart</Button>
            </CardFooter>
          </Card>

          <div className="divider my-12" />

          {/* Badges */}
          <H2>Badges</H2>
          <div className="flex gap-4 flex-wrap mb-12">
            <Badge>Default</Badge>
            <Badge variant="accent">On Sale</Badge>
            <Badge variant="success">In Stock</Badge>
            <Badge>New Arrival</Badge>
            <Badge variant="accent">Limited Edition</Badge>
          </div>

          <div className="divider my-12" />

          {/* Layout Grid */}
          <H2>Responsive Grid</H2>
          <p className="text-neutral-600 mb-6">
            Grid automatically responds to screen size (1 col mobile, 2 col tablet, 3+ col desktop)
          </p>
          <Grid cols={4} className="mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} variant="flat">
                <div className="h-32 flex items-center justify-center">
                  <span className="text-2xl font-semibold">Item {item}</span>
                </div>
              </Card>
            ))}
          </Grid>

          <div className="divider my-12" />

          {/* Spacing */}
          <H2>Spacing Scale</H2>
          <div className="space-y-6 mb-12">
            {[
              { space: '1', px: '4px' },
              { space: '2', px: '8px' },
              { space: '4', px: '16px' },
              { space: '6', px: '24px' },
              { space: '8', px: '32px' },
              { space: '12', px: '48px' },
              { space: '16', px: '64px' },
            ].map((item) => (
              <div key={item.space} className="flex items-center gap-4">
                <div className="w-32 text-sm font-semibold">--space-{item.space}</div>
                <div className="flex-1 bg-neutral-200 h-12 rounded" />
                <div className="text-sm text-neutral-600">{item.px}</div>
              </div>
            ))}
          </div>

          <div className="divider my-12" />

          {/* Border & Shadow */}
          <H2>Shadows & Elevation</H2>
          <Grid cols={4} className="mb-12">
            <div className="p-4 bg-white rounded-lg" style={{ boxShadow: 'var(--shadow-xs)' }}>
              <p className="font-semibold text-sm">Shadow XS</p>
            </div>
            <div className="p-4 bg-white rounded-lg" style={{ boxShadow: 'var(--shadow-sm)' }}>
              <p className="font-semibold text-sm">Shadow SM</p>
            </div>
            <div className="p-4 bg-white rounded-lg" style={{ boxShadow: 'var(--shadow-md)' }}>
              <p className="font-semibold text-sm">Shadow MD</p>
            </div>
            <div className="p-4 bg-white rounded-lg" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <p className="font-semibold text-sm">Shadow LG</p>
            </div>
          </Grid>

          <div className="divider my-12" />

          {/* Borders */}
          <H2>Dividers</H2>
          <div className="space-y-6 mb-12">
            <div>
              <p className="text-sm text-neutral-600 mb-4">Thin Divider (1px)</p>
              <div className="divider" />
            </div>
            <div>
              <p className="text-sm text-neutral-600 mb-4">Thick Divider (2px)</p>
              <div className="divider-thick" />
            </div>
          </div>

          <div className="divider my-12" />

          {/* Utilities */}
          <H2>Text Utilities</H2>
          <div className="space-y-4 mb-12">
            <p className="text-center bg-neutral-50 p-4 rounded">Text Center</p>
            <p className="text-right bg-neutral-50 p-4 rounded">Text Right</p>
            <p className="uppercase bg-neutral-50 p-4 rounded">Uppercase Text</p>
            <p className="truncate bg-neutral-50 p-4 rounded">
              This is a very long text that will be truncated with an ellipsis because it's too
              long to fit in the container
            </p>
            <div className="line-clamp-2 bg-neutral-50 p-4 rounded">
              This text is clamped to 2 lines maximum. Any content beyond two lines will be hidden
              with an ellipsis. This is useful for product cards and similar components where you
              want consistent height.
            </div>
          </div>
        </Container>
      </Section>

      {/* Usage Examples */}
      <Section className="bg-neutral-50">
        <Container>
          <H2 className="mb-8">Component Import Examples</H2>
          <Card variant="flat">
            <pre className="text-sm overflow-x-auto">
              {`import {
  Button,
  Container,
  Section,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  H1, H2, H3, H4, H5, H6,
  Heading,
  Badge,
  Link,
} from '@/components/ui'

// Usage
export default function MyPage() {
  return (
    <Section>
      <Container>
        <H1>My Page</H1>
        <Grid cols={3}>
          <Card>
            <H4>Feature</H4>
            <p>Description</p>
            <Button>Action</Button>
          </Card>
        </Grid>
      </Container>
    </Section>
  )
}`}
            </pre>
          </Card>
        </Container>
      </Section>

      {/* Footer */}
      <Section className="border-t border-neutral-200">
        <Container>
          <p className="text-sm text-neutral-600">
            Design System Documentation:{' '}
            <code className="bg-neutral-100 px-2 py-1 rounded">
              src/styles/DESIGN_SYSTEM.md
            </code>
          </p>
        </Container>
      </Section>
    </div>
  )
}
