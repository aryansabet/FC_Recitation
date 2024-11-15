import turtle

x = 50  # Forward movement distance
a = 30  # Angle for turning

def follow(s):
    """Draw the L-system string using turtle graphics"""
    saved_states = []  # Stack to save positions and angles
    
    for c in s:
        if c == 'f':
            turtle.forward(x)
        elif c == '-':
            turtle.left(a)
        elif c == '+':
            turtle.right(a)
        elif c == '[':
            # Save the current position and angle
            saved_states.append((turtle.position(), turtle.heading()))
        elif c == ']':
            # Restore the last saved position and angle
            if saved_states:
                position, heading = saved_states.pop()
                # turtle.penup()
                turtle.setposition(position)
                turtle.setheading(heading)
                # turtle.pendown()

def process_inst(s, n):
    """Process the L-system string recursively"""
    if n == 0:
        return s
    
    result = ""
    for c in s:
        if c == axiom:
            result += rule
        else:
            result += c
    
    return process_inst(result, n-1)

# Setup turtle
turtle.speed(0)  # Fastest speed
turtle.color('green')  # Make it green like a tree
turtle.left(90)  # Start pointing upward

# Create and draw the tree
axiom = "f"
rule = "f[-f][+f]"
tree = process_inst(axiom, 4)  # Try different numbers for different tree sizes
follow(tree)

turtle.mainloop()
