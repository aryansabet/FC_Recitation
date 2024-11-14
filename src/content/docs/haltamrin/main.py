# import turtle

# x = 50  # Forward movement distance
# a = 20  # Angle for turning

# def follow(s):
#     """Draw the L-system string using turtle graphics"""
#     saved_states = []  # Stack to save positions and angles
    
#     for c in s:
#         if c == 'f':
#             turtle.forward(x)
#         elif c == '-':
#             turtle.left(a)
#         elif c == '+':
#             turtle.right(a)
#         elif c == '[':
#             # Save the current position and angle
#             saved_states.append((turtle.position(), turtle.heading()))
#         elif c == ']':
#             # Restore the last saved position and angle
#             if saved_states:
#                 position, heading = saved_states.pop()
#                 turtle.penup()
#                 turtle.setposition(position)
#                 turtle.setheading(heading)
#                 turtle.pendown()

# def process_inst(s, n):
#     """Process the L-system string recursively"""
#     if n == 0:
#         return s
    
#     result = ""
#     for c in s:
#         if c == 'f':
#             result += "f[-f][+f]"
#         else:
#             result += c
    
#     return process_inst(result, n-1)

# # Setup turtle
# turtle.speed(0)  # Fastest speed
# turtle.color('green')  # Make it green like a tree
# turtle.left(90)  # Start pointing upward

# # Create and draw the tree
# base_pattern = "f"
# tree = process_inst(base_pattern, 4)  # Try different numbers for different tree sizes
# follow(tree)

# turtle.mainloop()
import turtle

# ساخت لاک‌پشت و صفحه
screen = turtle.Screen()
t = turtle.Turtle()
t.shape("square")
t.color("blue")
t.penup()

# لیست برای ذخیره موقعیت‌ها
saved_x = []  # لیست برای ذخیره x
saved_y = []  # لیست برای ذخیره y

def save_spot():
    # ذخیره موقعیت فعلی
    saved_x.append(t.xcor())
    saved_y.append(t.ycor())

    # نمایش نقطه سبز
    old_color = t.color()[0]  # گرفتن رنگ فعلی
    t.color("green")
    t.dot(10)        # کشیدن نقطه
    t.color(old_color)  # برگرداندن رنگ قبلی

def go_back():
    # اگر موقعیتی ذخیره شده باشد
    if len(saved_x) > 0:
        # برداشتن آخرین موقعیت
        last_x = saved_x.pop()
        last_y = saved_y.pop()
        # رفتن به آن موقعیت
        t.goto(last_x, last_y)

# کلیدها
def move_right():
    t.forward(50)

screen.onkey(move_right, "Right")  # حرکت
screen.onkey(save_spot, "s")       # ذخیره با s
screen.onkey(go_back, "b")         # برگشت با b
screen.listen()

screen.mainloop()